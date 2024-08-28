// register router to app express
import auth from './auth';
import profile from './profile';
export const registerRouter = (app : any) => {
    app.use('/auth', auth);
    app.use('/profile', profile);
}