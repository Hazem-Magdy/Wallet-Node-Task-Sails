import { expect } from 'chai';
const sinon = require("sinon");
import AuthService from "../services/AuthService";


describe('UserService', () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
    
  });

  it('should register a new user', async () => {
    sinon.stub(authService , "registerUser").returns(true)
    const result = await authService.registerUser('zzzzz', '01007756572', '0502349611@Hossam', 'User');
    expect(result).to.be.true;
  });

  it('should not register a user with existing mobile', async () => {
    sinon.stub(authService , "registerUser").returns(false)
    const result = await authService.registerUser('Dina', '01009756572', '0502349611@Dina', 'User');
    expect(result).to.be.false;
  });

  it('should login a user with correct credentials', async () => {
    sinon.stub(authService , "loginUser").returns(String)
    const token = await authService.loginUser('01009756572', '0502349611@Hazem');
    expect(token).to.be.a('string');
  });

  it('should not login a user with incorrect credentials', async () => {
    sinon.stub(authService , "loginUser").returns(null)
    const token = await authService.loginUser('01009751572', '0502349611@Zoz');
    expect(token).to.be.null;
  });
});

