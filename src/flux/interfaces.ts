
import constants = require('../constants');
import actions = require('./actions');

export interface IPayload {
  type:constants.StringConstant;
  action:actions.Action;
}
