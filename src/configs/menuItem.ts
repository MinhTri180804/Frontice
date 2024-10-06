import React from 'react';
import { paths } from '../constant';

interface MenuItem {
    label: string;
    path: string;
    icon?: React.ReactNode;
    children?: MenuItem[];
}

function getItem(
    label: string,
    path: string,
    icon?: React.ReactNode,
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
    getItem('Home', paths.home),

    getItem('Challenge', 'challenge', null, [
        getItem('Challenges system', paths.challengesSystem),
        getItem('Challenges recruiter', paths.challengesRecruiter),
    ]),

    getItem('Solution', 'solution', null, [
        getItem('Solutions', paths.solutions),
        getItem('My solutions', paths.mySolutions),
    ]),

    getItem('Information', 'information', null, [
        getItem('Profile', paths.profile),
        getItem('Setting', paths.setting),
    ]),
];

export default items;
