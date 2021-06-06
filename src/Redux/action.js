import { db } from "../App";

export const signIn = (email) => (dispatch) => {
  dispatch({
    type: "signIn",
    payload: email,
  });
};

export const signUp = (email) => (dispatch) => {
  dispatch({
    type: "signUp",
  });
};

export const add = (newItem) => (dispatch) => {
  db.collection("Items")
    .doc(newItem.id)
    .set({
      id: newItem.id,
      text: newItem.text,
    })
    .then(() => {})
    .catch((error) => {
      console.error("Error writing document: ", error);
    });

  dispatch({
    type: "add",
    payload: newItem,
  });
};

export const getData = () => (dispatch) => {
  db.collection("Items")
    .get()
    .then((querySnapshot) => {
      const all = [];
      querySnapshot.forEach((doc) => {
        all.push(doc.data());
      });
      dispatch({
        type: "get",
        payload: all,
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

export const deleteItem = (id) => (dispatch) => {
  db.collection("Items")
    .doc(id)
    .delete()
    .catch((error) => {
      console.error("Error removing document: ", error);
    })
    .finally(() => {
      db.collection("Items")
        .get()
        .then((querySnapshot) => {
          const all = [];
          querySnapshot.forEach((doc) => {
            all.push(doc.data());
          });
          dispatch({
            type: "get",
            payload: all,
          });
        });
    });
};
