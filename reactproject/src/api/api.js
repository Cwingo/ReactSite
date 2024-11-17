// Base URL for your ProjectApi
const API_BASE_URL = 'http://localhost:3000';

// Fetch Game Schedule
export const fetchGameSchedule = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/schedule`);
    if (!response.ok) {
      throw new Error('Failed to fetch game schedule');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching game schedule:', error);
    return [];
  }
};

// Fetch Team Roster
export const fetchTeamRoster = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/roster`);
    if (!response.ok) {
      throw new Error('Failed to fetch team roster');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching team roster:', error);
    return [];
  }
};
