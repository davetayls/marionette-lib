
import constants = require('../constants');
import actions = require('./actions');

export interface IPayload {
  source:constants.StringConstant;
  action:actions.Action;
}
