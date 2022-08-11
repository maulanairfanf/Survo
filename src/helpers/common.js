export const getName = () => {
  return localStorage.getItem("fullname") || null;
};

// return the token from the session storage
export const getToken = () => {
  return localStorage.getItem("token") || null;
};


export const getId = () => {
  return localStorage.getItem("id") || null;
};


export const removeUserSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("fullname");
  localStorage.removeItem("email");
  window.location.reload();
};
