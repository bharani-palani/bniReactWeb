class Auth {
  constructor() {
    this.authenticated = false;
  }

  isAuthenticated(appResponse, userResponse) {
    const [appStoreData] = appResponse;
    this.authenticated = appStoreData.google_id === userResponse.userData.googleId;
    return this.authenticated
    // return true; // change this to vaid above condition
  }
}

export default new Auth();
