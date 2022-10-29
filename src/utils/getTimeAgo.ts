export const getTimeAgo = (time: number) => {
  /**
   * секунды между текущей датой и временем из time
   * new Date - new Date(time * 1000) / 1000
   * если делится на 60 и больше 1 то минут прошло
   * если делится на 60 и больше 3600 то часов прошло
   * и дни, месяца, года
   * и последний - секунды
   */

  return new Date(time * 1000).getMinutes() > 60
    ? Math.floor(new Date(time * 1000).getMinutes() / 60) + " hours ago"
    : new Date(time * 1000).getMinutes() + " minutes ago";
};
