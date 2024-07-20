import axios from "axios";

const rootUrl = "https://noteapp-api-hxti.onrender.com";

export async function fetchLoginData(userName, password) {
  try {
    let userData;

    if (userName.includes(".com")) {
      userData = { email: userName, password };
    } else {
      userData = { username: userName, password };
    }

    const data = await axios.post(
      `${rootUrl}/note-app/v1/user/getuser`,
      userData
    );

    return data.data.user;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSignUpData(email, userName, password) {
  try {
    let userData = { email, username: userName, password };

    const data = await axios.post(
      `${rootUrl}/note-app/v1/user/createuser`,
      userData
    );

    return data.data.user;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUserById(id) {
  try {
    const fetchedData = await axios.get(`${rootUrl}/note-app/v1/user/${id}`);
    return fetchedData.data;
  } catch (error) {
    console.log(error);
  }
}

export async function addNote(newNote) {
  try {
    await axios.post(`${rootUrl}/note-app/v1/notes/${newNote.userId}`, newNote);
    return;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchNotes(userId) {
  try {
    const fetchedNotes = await axios.get(
      `${rootUrl}/note-app/v1/notes/${userId}`
    );
    return fetchedNotes.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getNote(_id) {
  try {
    const fetchedNotes = await axios.get(
      `${rootUrl}/note-app/v1/notes/get/${_id}`
    );
    return fetchedNotes.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updatePinnedStatus(_id, status) {
  try {
    await axios.patch(`${rootUrl}/note-app/v1/notes/${_id}`, {
      pinned: status,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function updateNote(_id, updated) {
  try {
    await axios.patch(`${rootUrl}/note-app/v1/notes/${_id}`, updated);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteNote(_id) {
  try {
    const response = await axios.delete(`${rootUrl}/note-app/v1/notes/${_id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function executeSearch(_id, query) {
  try {
    const fetchedData = await axios.get(
      `${rootUrl}/note-app/v1/notes/search/${_id}?searchQuery=${query}`
    );
    return fetchedData.data;
  } catch (error) {
    console.log(error);
  }
}
