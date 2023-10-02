import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.conponent';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const handlerSignOut = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {
            currentUser ? (
              <Link className='nav-link' onClick={handlerSignOut}>
                Sign out
              </Link>
            ) : (
              <Link className='nav-link' to='/auth'>
                Sign In
              </Link>
            )
          }
          <CartIcon />
        </div>
        { isCartOpen && <CartDropdown /> }
      </div>
      <Outlet/>
    </Fragment>
  )
};

export default Navigation;