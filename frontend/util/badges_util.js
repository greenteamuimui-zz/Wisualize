export const getBadges = (token) => {
  return (
    $.ajax({
      method: 'GET',
      url: `http://api.wonolo.com/api_v2/badges?token=${token}`,
    })
  );
};
