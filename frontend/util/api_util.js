export const getBadges = (token) => {
  return (
    $.ajax({
      method: 'GET',
      url: `http://api.wonolo.com/api_v2/badges?token=${token}`,
    })
  );
};

export const getUsers = (token, page) => {
  return (
    $.ajax({
      method: 'GET',
      url: `http://api.wonolo.com/api_v2/users?token=${token}&type=Worker&page=${page}&per=50`,
    })
  );
};

export const getJobs = (token, page) => {
  return (
    $.ajax({
      method: 'GET',
      url: `http://api.wonolo.com/api_v2/job_requests?token=${token}&page=${page}&per=50`,
    })
  );
};
