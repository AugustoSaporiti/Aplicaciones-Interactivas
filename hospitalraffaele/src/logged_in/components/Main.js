import React, { memo, useCallback, useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import Routing from "./Routing";
import NavBar from "./navigation/NavBar";
import ConsecutiveSnackbarMessages from "../../shared/components/ConsecutiveSnackbarMessages";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";
import persons from "../dummy_data/persons";
import LazyLoadAddBalanceDialog from "./subscription/LazyLoadAddBalanceDialog";
import LazyLoadAddUserDialog from "./users/LazyLoadAddUserDialog";
import * as Back from '../../controllers/api/api.users';

const styles = (theme) => ({
  main: {
    marginLeft: theme.spacing(9),
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function Main(props) {
  const { classes } = props;
  const [selectedTab, setSelectedTab] = useState(null);
  const [CardChart, setCardChart] = useState(null);
  const [hasFetchedCardChart, setHasFetchedCardChart] = useState(false);
  const [EmojiTextArea, setEmojiTextArea] = useState(null);
  const [hasFetchedEmojiTextArea, setHasFetchedEmojiTextArea] = useState(false);
  const [ImageCropper, setImageCropper] = useState(null);
  const [hasFetchedImageCropper, setHasFetchedImageCropper] = useState(false);
  const [Dropzone, setDropzone] = useState(null);
  const [hasFetchedDropzone, setHasFetchedDropzone] = useState(false);
  const [DateTimePicker, setDateTimePicker] = useState(null);
  const [hasFetchedDateTimePicker, setHasFetchedDateTimePicker] = useState(
    false
  );
  const [transactions, setTransactions] = useState([]);
  const [userList, setUserList] = useState([]);
  const [roleList, setRoleList] = useState([]);
  const [statistics, setStatistics] = useState({ views: [], profit: [] });
  const [posts, setPosts] = useState([]);
  const [targets, setTargets] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isAccountActivated, setIsAccountActivated] = useState(false);
  const [isAddBalanceDialogOpen, setIsAddBalanceDialogOpen] = useState(false);
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false);
  const [isAddRoleDialogOpen, setIsAddRoleDialogOpen] = useState(false);
  const [pushMessageToSnackbar, setPushMessageToSnackbar] = useState(null);

  const fetchRandomTargets = useCallback(() => {
    const targets = [];
    for (let i = 0; i < 35; i += 1) {
      const randomPerson = persons[Math.floor(Math.random() * persons.length)];
      const target = {
        id: i,
        name: randomPerson.name,
        profilePicUrl: randomPerson.profilePicUrl,
        lastName: randomPerson.lastName,
        email: randomPerson.email,
        phoneNumber: randomPerson.phoneNumber,
        isActivated: Math.round(Math.random()) ? true : false,
      };
      targets.push(target);
    }
    setTargets(targets);
  }, [setTargets]);

  const openAddBalanceDialog = useCallback(() => {
    setIsAddBalanceDialogOpen(true);
  }, [setIsAddBalanceDialogOpen]);

  const closeAddBalanceDialog = useCallback(() => {
    setIsAddBalanceDialogOpen(false);
  }, [setIsAddBalanceDialogOpen]);

  const openAddUserDialog = useCallback(() => {
    setIsAddUserDialogOpen(true);
  }, [setIsAddUserDialogOpen]);

  const closeAddUserDialog = useCallback(() => {
    setIsAddUserDialogOpen(false);
  }, [setIsAddUserDialogOpen]);

  const openAddRoleDialog = useCallback(() => {
    setIsAddRoleDialogOpen(true);
  }, [setIsAddRoleDialogOpen]);

  const closeAddRoleDialog = useCallback(() => {
    setIsAddRoleDialogOpen(false);
  }, [setIsAddRoleDialogOpen]);

  const onPaymentSuccess = useCallback(() => {
    pushMessageToSnackbar({
      text: "Your balance has been updated.",
    });
    setIsAddBalanceDialogOpen(false);
  }, [pushMessageToSnackbar, setIsAddBalanceDialogOpen]);

  const onAddUserSuccess = useCallback(() => {
    pushMessageToSnackbar({
      text: "El usuario ha sido creado.",
    });
    setIsAddUserDialogOpen(false);
  }, [pushMessageToSnackbar, setIsAddUserDialogOpen]);

  const onAddRoleSuccess = useCallback(() => {
    pushMessageToSnackbar({
      text: "El rol ha sido creado.",
    });
    setIsAddRoleDialogOpen(false);
  }, [pushMessageToSnackbar, setIsAddRoleDialogOpen]);

  const editUser = useCallback(() => {
    
  });

  const fetchRandomStatistics = useCallback(() => {
    const statistics = { profit: [], views: [] };
    const iterations = 300;
    const oneYearSeconds = 60 * 60 * 24 * 365;
    let curProfit = Math.round(3000 + Math.random() * 1000);
    let curViews = Math.round(3000 + Math.random() * 1000);
    let curUnix = Math.round(new Date().getTime() / 1000) - oneYearSeconds;
    for (let i = 0; i < iterations; i += 1) {
      curUnix += Math.round(oneYearSeconds / iterations);
      curProfit += Math.round((Math.random() * 2 - 1) * 10);
      curViews += Math.round((Math.random() * 2 - 1) * 10);
      statistics.profit.push({
        value: curProfit,
        timestamp: curUnix,
      });
      statistics.views.push({
        value: curViews,
        timestamp: curUnix,
      });
    }
    setStatistics(statistics);
  }, [setStatistics]);

  const fetchRandomTransactions = useCallback(() => {
    const transactions = [];
    const iterations = 32;
    const oneMonthSeconds = Math.round(60 * 60 * 24 * 30.5);
    const transactionTemplates = [
      {
        description: "Starter subscription",
        isSubscription: true,
        balanceChange: -1499,
      },
      {
        description: "Premium subscription",
        isSubscription: true,
        balanceChange: -2999,
      },
      {
        description: "Business subscription",
        isSubscription: true,
        balanceChange: -4999,
      },
      {
        description: "Tycoon subscription",
        isSubscription: true,
        balanceChange: -9999,
      },
      {
        description: "Added funds",
        isSubscription: false,
        balanceChange: 2000,
      },
      {
        description: "Added funds",
        isSubscription: false,
        balanceChange: 5000,
      },
    ];
    let curUnix = Math.round(
      new Date().getTime() / 1000 - iterations * oneMonthSeconds
    );
    for (let i = 0; i < iterations; i += 1) {
      const randomTransactionTemplate =
        transactionTemplates[
          Math.floor(Math.random() * transactionTemplates.length)
        ];
      const transaction = {
        id: i,
        description: randomTransactionTemplate.description,
        balanceChange: randomTransactionTemplate.balanceChange,
        paidUntil: curUnix + oneMonthSeconds,
        timestamp: curUnix,
      };
      curUnix += oneMonthSeconds;
      transactions.push(transaction);
    }
    transactions.reverse();
    setTransactions(transactions);
  }, [setTransactions]);

  const fetchRandomUsers = useCallback(() => {
    let user = {
      email: "hola@test.com",
      password: 232323,
      role: 2
    }

    const test = Back.createUser(user);
    console.log('PAULA -> ');
    console.log(test);
    console.log('<- PAULA');
    const userList = [];
    const iterations = 4;
    const oneMonthSeconds = Math.round(60 * 60 * 24 * 30.5);
    const userTemplates = [
      {
        name: "Pepita",
        surname: "Gomez",
        dni: "222222222",
        email: "pepita@test.com",
        role: "Admin",
      },
      {
        name: "Sandro",
        surname: "Perez",
        dni: "888888888",
        email: "sandro@test.com",
        role: "Doctor",
      },
      {
        name: "Lauro",
        surname: "Lopez",
        dni: "333333333",
        email: "lauro@test.com",
        role: "Secretario",
      },
      {
        name: "Susana Aguirre",
        surname: "Aguirre",
        dni: "111111111111",
        email: "susana@test.com",
        role: "Secretario",
      },
    ];
    let curUnix = Math.round(
      new Date().getTime() / 1000 - iterations * oneMonthSeconds
    );
    for (let i = 0; i < iterations; i += 1) {
      const randomUserTemplate = userTemplates[i];
      const user = {
        id: i,
        name: randomUserTemplate.name,
        surname: randomUserTemplate.surname,
        dni: randomUserTemplate.dni,
        email: randomUserTemplate.email,
        role: randomUserTemplate.role,
        timestamp: curUnix,
      };
      curUnix += oneMonthSeconds;
      userList.push(user);
    }
    setUserList(userList);
  }, [setUserList]);

  const fetchRandomRoles = useCallback(() => {
    const roleList = [];
    const iterations = 4;
    const oneMonthSeconds = Math.round(60 * 60 * 24 * 30.5);
    const roleTemplates = [
      {
        name: "Admin",
      },
      {
        name: "Medico",
      },
      {
        name: "Secretario",
      },
      {
        name: "Paciente",
      },
    ];
    for (let i = 0; i < iterations; i += 1) {
      const randomRoleTemplate = roleTemplates[i];
      const role = {
        id: i,
        name: randomRoleTemplate.name,
      };
      roleList.push(role);
    }
    setRoleList(roleList);
  }, [setRoleList]);

  const fetchRandomMessages = useCallback(() => {
    shuffle(persons);
    const messages = [];
    const iterations = persons.length;
    const oneDaySeconds = 60 * 60 * 24;
    let curUnix = Math.round(
      new Date().getTime() / 1000 - iterations * oneDaySeconds
    );
    for (let i = 0; i < iterations; i += 1) {
      const person = persons[i];
      const message = {
        id: i,
        profilePicUrl: person.profilePicUrl,
        date: curUnix,
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.",
      };
      curUnix += oneDaySeconds;
      messages.push(message);
    }
    messages.reverse();
    setMessages(messages);
  }, [setMessages]);

  const fetchRandomPosts = useCallback(() => {
    shuffle(persons);
    const posts = [];
    const iterations = persons.length;
    const oneDaySeconds = 60 * 60 * 24;
    let curUnix = Math.round(
      new Date().getTime() / 1000 - iterations * oneDaySeconds
    );
    for (let i = 0; i < iterations; i += 1) {
      const person = persons[i];
      const post = {
        id: i,
        src: person.profilePicUrl,
        timestamp: curUnix,
        name: person.name,
      };
      curUnix += oneDaySeconds;
      posts.push(post);
    }
    posts.reverse();
    setPosts(posts);
  }, [setPosts]);

  const toggleAccountActivation = useCallback(() => {
    if (pushMessageToSnackbar) {
      if (isAccountActivated) {
        pushMessageToSnackbar({
          text: "Your account is now deactivated.",
        });
      } else {
        pushMessageToSnackbar({
          text: "Your account is now activated.",
        });
      }
    }
    setIsAccountActivated(!isAccountActivated);
  }, [pushMessageToSnackbar, isAccountActivated, setIsAccountActivated]);

  const selectDashboard = useCallback(() => {
    smoothScrollTop();
    document.title = "Consultorio Raffaele";
    setSelectedTab("Dashboard");
    if (!hasFetchedCardChart) {
      setHasFetchedCardChart(true);
      import("../../shared/components/CardChart").then((Component) => {
        setCardChart(Component.default);
      });
    }
  }, [
    setSelectedTab,
    setCardChart,
    hasFetchedCardChart,
    setHasFetchedCardChart,
  ]);

  const selectPosts = useCallback(() => {
    smoothScrollTop();
    document.title = "Consultorio Raffaele";
    setSelectedTab("Posts");
    if (!hasFetchedEmojiTextArea) {
      setHasFetchedEmojiTextArea(true);
      import("../../shared/components/EmojiTextArea").then((Component) => {
        setEmojiTextArea(Component.default);
      });
    }
    if (!hasFetchedImageCropper) {
      setHasFetchedImageCropper(true);
      import("../../shared/components/ImageCropper").then((Component) => {
        setImageCropper(Component.default);
      });
    }
    if (!hasFetchedDropzone) {
      setHasFetchedDropzone(true);
      import("../../shared/components/Dropzone").then((Component) => {
        setDropzone(Component.default);
      });
    }
    if (!hasFetchedDateTimePicker) {
      setHasFetchedDateTimePicker(true);
      import("../../shared/components/DateTimePicker").then((Component) => {
        setDateTimePicker(Component.default);
      });
    }
  }, [
    setSelectedTab,
    setEmojiTextArea,
    setImageCropper,
    setDropzone,
    setDateTimePicker,
    hasFetchedEmojiTextArea,
    setHasFetchedEmojiTextArea,
    hasFetchedImageCropper,
    setHasFetchedImageCropper,
    hasFetchedDropzone,
    setHasFetchedDropzone,
    hasFetchedDateTimePicker,
    setHasFetchedDateTimePicker,
  ]);

  const selectSubscription = useCallback(() => {
    smoothScrollTop();
    document.title = "WaVer - Subscription";
    setSelectedTab("Subscription");
  }, [setSelectedTab]);

  const selectUsers = useCallback(() => {
    smoothScrollTop();
    document.title = "Consultorio Raffaele";
    setSelectedTab("Users");
  }, [setSelectedTab]);

  const getPushMessageFromChild = useCallback(
    (pushMessage) => {
      setPushMessageToSnackbar(() => pushMessage);
    },
    [setPushMessageToSnackbar]
  );

  useEffect(() => {
    fetchRandomTargets();
    fetchRandomStatistics();
    fetchRandomTransactions();
    fetchRandomUsers();
    fetchRandomRoles();
    fetchRandomMessages();
    fetchRandomPosts();
  }, [
    fetchRandomTargets,
    fetchRandomStatistics,
    fetchRandomTransactions,
    fetchRandomUsers,
    fetchRandomRoles,
    fetchRandomMessages,
    fetchRandomPosts,
  ]);

  return (
    <Fragment>
      <LazyLoadAddBalanceDialog
        open={isAddBalanceDialogOpen}
        onClose={closeAddBalanceDialog}
        onSuccess={onPaymentSuccess}
      />
      <NavBar
        selectedTab={selectedTab}
        messages={messages}
        openAddBalanceDialog={openAddBalanceDialog}
      />
      <LazyLoadAddUserDialog
        open={isAddUserDialogOpen}
        onClose={closeAddUserDialog}
        onSuccess={onAddUserSuccess}
      />
      <ConsecutiveSnackbarMessages
        getPushMessageFromChild={getPushMessageFromChild}
      />
      <main className={classNames(classes.main)}>
        <Routing
          isAccountActivated={isAccountActivated}
          ImageCropper={ImageCropper}
          EmojiTextArea={EmojiTextArea}
          CardChart={CardChart}
          Dropzone={Dropzone}
          DateTimePicker={DateTimePicker}
          toggleAccountActivation={toggleAccountActivation}
          pushMessageToSnackbar={pushMessageToSnackbar}
          transactions={transactions}
          userList={userList}
          roleList={roleList}
          statistics={statistics}
          posts={posts}
          targets={targets}
          selectDashboard={selectDashboard}
          selectPosts={selectPosts}
          selectSubscription={selectSubscription}
          selectUsers={selectUsers}
          openAddBalanceDialog={openAddBalanceDialog}
          openAddUserDialog={openAddUserDialog}
          openAddRoleDialog={openAddRoleDialog}
          setTargets={setTargets}
          setPosts={setPosts}
        />
      </main>
    </Fragment>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Main));
