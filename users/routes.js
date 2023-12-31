import * as dao from "./dao.js";
function UserRoutes(app) {
    const createUser = async (req, res) => {
        const user = await dao.createUser(req.body);
        res.json(user);
    };
    const deleteUser = async (req, res) => {
        const status = await dao.deleteUser(req.params.userId);
        res.json(status);
    };
    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers();
        res.json(users);
    };
    const findUserById = async (req, res) => {
        const user = await dao.findUserById(req.params.userId);
        res.json(user);
    };
    const updateUser = async (req, res) => {
        const { userId } = req.params;
        const status = await dao.updateUser(userId, req.body);
        const currentUser = await dao.findUserById(userId);
        req.session['currentUser'] = currentUser;
        res.json(status);
    };
    const signup = async (req, res) => {
        const user = await dao.findUserByUsername(
            req.body.username);
        if (user) {
            res.status(400).json(
                { message: "Username already taken" });
        }
        const currentUser = await dao.createUser(req.body);
        req.session['currentUser'] = currentUser;
        res.json(currentUser);
    };
    const signin = async (req, res) => {
        const { username, password } = req.body;
        const currentUser = await dao.findUserByCredentials(username, password);
        req.session['currentUser'] = currentUser;
        res.json(currentUser);
    };
    const signout = (req, res) => {
        req.session.destroy();
        res.json(200);
    };
    const account = async (req, res) => {
        if (req.session.currentUser) {
            res.json(req.session['currentUser']);
        } else {
            res.status(403).json({ message: "Not logged in" });
        }
    };
    const addFavoriteLocation = async (req, res) => {
        const { userId } = req.params;
        const { locationId } = req.body;
        let user = await dao.findUserById(userId);
        user.favorites.push(locationId);
        const status = await dao.updateUser(userId, user);
        const currentUser = await dao.findUserById(userId);
        req.session['currentUser'] = currentUser;
        res.json(status);
    }
    const addFavoriteChannel = async (req, res) => {
        const { userId } = req.params;
        const { channelId } = req.body;
        let user = await dao.findUserById(userId);
        user.favoriteChannels.push(channelId);
        const status = await dao.updateUser(userId, user);
        const currentUser = await dao.findUserById(userId);
        req.session['currentUser'] = currentUser;
        res.json(status);
    }
    const addChannelAffiliation = async (req, res) => {
        const { userId } = req.params;
        const { channelId } = req.body;
        let user = await dao.findUserById(userId);
        user.channelAffiliations.push(channelId);
        const status = await dao.updateUser(userId, user);
        const currentUser = await dao.findUserById(userId);
        req.session['currentUser'] = currentUser;
        res.json(status);
    }

    app.post("/api/users", createUser);
    app.get("/api/users", findAllUsers);
    app.get("/api/users/:userId", findUserById);
    app.put("/api/users/:userId", updateUser);
    app.delete("/api/users/:userId", deleteUser);
    app.post("/api/users/signup", signup);
    app.post("/api/users/signin", signin);
    app.post("/api/users/signout", signout);
    app.post("/api/users/account", account);
    app.post("/api/users/favorites/:userId", addFavoriteLocation);
    app.post("/api/users/favoriteChannels/:userId", addFavoriteChannel);
    app.post("/api/users/channelAffiliations/:userId", addChannelAffiliation);
}
export default UserRoutes;