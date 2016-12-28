/**
 * Created by sampson on 2016/12/28.
 */
import user from '../models/user'
export default (passport)=>{
    passport.use(new LocalStrategy(user.authenticate()));
    passport.serializeUser(user.serializeUser());
    passport.deserializeUser(user.deserializeUser());

}