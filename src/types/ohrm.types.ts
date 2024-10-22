export enum Labels {
    ADMIN = 'admin',
    PIM = 'pim',
    LEAVE = 'leave',
    TIME = 'time',
    RECRUITMENT = 'recruitment',
    MY_INFO = 'my_info',
    PERFORMANCE = 'performance',
    DASHBOARD = 'dashboard',
    DIRECTORY = 'directory',
    MAINTENANCE = 'maintenance',
    CLAIM = 'claim',
    BUZZ = 'buzz',
};

export const menus: Menu = {
    admin: {
        label: 'Admin',
        suffix_fragment: 'viewAdminModule',
    },
    pim: {
        label: 'PIM',
        suffix_fragment: 'viewPimModule',
    },
    leave: {
        label: 'Leave',
        suffix_fragment: 'viewLeaveModule',
    },
    time: {
        label: 'Time',
        suffix_fragment: 'viewTimeModule',
    },
    recruitment: {
        label: 'Recruitment',
        suffix_fragment: 'viewRecruitmentModule',
    },
    my_info: {
        label: 'My Info',
        suffix_fragment: 'viewMyDetails',
    },
    performance: {
        label: 'Performance',
        suffix_fragment: 'viewPerformanceModule',
    },
    dashboard: {
        label: 'Dashboard',
        suffix_fragment: 'dashboard/index',
    },
    directory: {
        label: 'Directory',
        suffix_fragment: 'viewDirectory',
    },
    maintenance: {
        label: 'Maintenance',
        suffix_fragment: 'viewMaintenanceModule',
    },
    claim: {
        label: 'Claim',
        suffix_fragment: 'viewClaimModule',
    },
    buzz: {
        label: 'Buzz',
        suffix_fragment: 'viewBuzz',
    },
};

interface Menu {
    [key: string]: MenuProperties;
}

interface MenuProperties {
    label: string;
    suffix_fragment: string;
};