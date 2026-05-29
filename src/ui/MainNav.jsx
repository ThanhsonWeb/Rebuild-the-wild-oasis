import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TbUsers } from "react-icons/tb";
import { HiHomeModern } from "react-icons/hi2";
import { CiSettings } from "react-icons/ci";
const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
	&:link,
	&:visited {
		display: flex;
		align-items: center;
		gap: 1.2rem;

		color: var(--color-grey-600);
		font-size: 1.6rem;
		font-weight: 500;
		padding: 1.2rem 2.4rem;
		transition: all 0.3s;
	}

	/* This works because react-router places the active class on the active NavLink */
	&:hover,
	&:active,
	&.active:link,
	&.active:visited {
		color: var(--color-grey-800);
		background-color: var(--color-grey-50);
		border-radius: var(--border-radius-sm);
	}

	& svg {
		width: 2.4rem;
		height: 2.4rem;
		color: var(--color-grey-400);
		transition: all 0.3s;
	}

	&:hover svg,
	&:active svg,
	&.active:link svg,
	&.active:visited svg {
		color: var(--color-brand-600);
	}
`;

function MainNav() {
	return (
		<nav>
			<NavList>
				<li>
					{/* this is NavLink from react router */}
					<StyledNavLink to="/dashboard">
						<AiOutlineHome />
						<span>Home</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/bookings">
						<MdOutlineCalendarMonth />
						<span>Bookings</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/cabins">
						<HiHomeModern />
						<span>Cabins</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/users">
						<TbUsers />
						<span>Users</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/settings">
						<CiSettings />
						<span>Settings</span>
					</StyledNavLink>
				</li>
			</NavList>
		</nav>
	);
}

export default MainNav;
