import * as moment from "moment";

export default (date: Date) => {
  return moment.parseZone(date).fromNow();
};
