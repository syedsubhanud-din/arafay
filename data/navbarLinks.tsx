import DashboardIcon from '@mui/icons-material/Dashboard';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TableChartIcon from '@mui/icons-material/TableChart';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';

export type Linkies = {
    to: string;
    name: string;
    icon: any;
  };
  
  export const linklist: Linkies[] = [
    { to: '/', name: 'home',icon:<DashboardIcon /> },
       { to: '/nft_marketplace', name: 'NFT Marketplace', icon: <StorefrontIcon /> },
       { to: '/data_tables', name: 'Data Tables', icon: <TableChartIcon /> }, 
       { to: '/profile', name: 'Profile', icon: <PersonIcon /> },
       { to: '/sign_in', name: 'Sign In', icon: <LockIcon /> },
       { to: '/rtl_admin', name: 'RTL Admin', icon: <HomeIcon /> }
  ];