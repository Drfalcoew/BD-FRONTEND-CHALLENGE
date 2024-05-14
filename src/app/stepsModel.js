const stepsModel = [
    {
        id: 'account',
        label: 'Account',
        fields: [
            {
                name: 'firstName',
                label: 'First Name',
                type: 'text',
                required: true,
            },
            {
                name: 'lastName',
                label: 'Last Name',
                type: 'text',
                required: true,
            },
            {
                name: 'email',
                label: 'Email Address',
                type: 'email',
                required: true,
            },
            {
                name: 'password',
                label: 'Password',
                type: 'password',
                required: true,
            },
            {
                name: 'confirmPassword',
                label: 'Confirm Password',
                type: 'password',
                required: true,
            }
        ],
    },
    {
        id: 'address',
        label: 'Address',
        fields: [
            {
                name: 'address',
                label: 'Address',
                type: 'text',
                required: true,
            },
            {
                name: 'secondAddress',
                label: 'Apartment, suite, etc.',
                type: 'text',
                required: false,
            },
            {
                name: 'country',
                label: 'Country',
                type: 'text',
                required: true,
            },
            {
                name: 'state',
                label: 'State',
                type: 'text',
                required: true,
            },
            {
                name: 'zip',
                label: 'Zipcode',
                type: 'text',
                required: true,
            },
            {
                name: 'company',
                label: 'Company',
                type: 'text',
                required: false,
            },
            {
                name: 'phoneNumber',
                label: 'Phone Number',
                type: 'text',
                required: false,
            }
        ],
    },
    {
        id: 'preferences',
        label: 'Preferences',
        fields: [
            {
                name: 'notifications',
                label: 'Send notifications',
                type: 'boolean',
                required: false,
            },
            {
                name: 'shareInformation',
                label: 'Share information',
                type: 'boolean',
                required: false,
            },
            {
                name: 'notificationPreferences',
                label: 'Notification Preferences',
                type: 'select',
                options: [
                    { value: 'email', label: 'Email' },
                    { value: 'phone', label: 'Phone' },
                    { value: 'mail', label: 'Mail' },
                ],
                required: false,
            }
        ],
    },
];

export default stepsModel;
