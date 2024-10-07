import React from 'react';
import { paths } from '../constant';
import {
    HomeIcon,
    ChallengeIcon,
    SolutionIcon,
    ProfileIcon,
    SettingIcon
} from "../assets/icons"
interface MenuItem {
    label: string;
    path: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    children?: MenuItem[];
}

function getItem(
    label: string,
    path: string,
    icon?: React.FC<React.SVGProps<SVGSVGElement>>,
    children?: MenuItem[]
): MenuItem {
    return {
        label,
        path,
        icon,
        children,
    };
}

const items: MenuItem[] = [
    getItem('Home', paths.home, HomeIcon),

    getItem('Challenge', 'challenge', undefined, [
        getItem('Challenges system', paths.challengesSystem, ChallengeIcon),
        getItem('Challenges recruiter', paths.challengesRecruiter, ChallengeIcon),
    ]),

    getItem('Solution', 'solution', undefined, [
        getItem('Solutions', paths.solutions, SolutionIcon),
        getItem('My solutions', paths.mySolutions, SolutionIcon),
    ]),

    getItem('Information', 'information', undefined, [
        getItem('Profile', paths.profile, ProfileIcon),
        getItem('Setting', paths.setting, SettingIcon),
    ]),
];

export default items;
