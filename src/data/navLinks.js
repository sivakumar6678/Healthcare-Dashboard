import { FaTachometerAlt, FaHistory, FaCalendarAlt, FaRegCalendarCheck, FaChartLine, FaComments, FaQuestionCircle } from 'react-icons/fa';

const navLinks = [
  { name: 'Dashboard', path: '/', icon: FaTachometerAlt },
  { name: 'History', path: '/history', icon: FaHistory },
  { name: 'Calendar', path: '/calendar', icon: FaCalendarAlt },
  { name: 'Appointments', path: '/appointments', icon: FaRegCalendarCheck },
  { name: 'Statistics', path: '/statistics', icon: FaChartLine },
  { name: 'Chat', path: '/chat', icon: FaComments },
  { name: 'Support', path: '/support', icon: FaQuestionCircle },
];


export default navLinks;
