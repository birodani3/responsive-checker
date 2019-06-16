import { Device, StringKeyed } from '@models';

export const devices: StringKeyed<Device[]> = {
    phones: [
        {
            name: 'iPhone XS Max',
            dimensions: { width: 414, height: 896 }
        },
        {
            name: 'iPhone X',
            dimensions: { width: 375, height: 812 }
        },
        {
            name: 'iPhone 8',
            dimensions: { width: 375, height: 667 }
        },
        {
            name: 'iPhone SE',
            dimensions: { width: 320, height: 568 }
        },
        {
            name: 'Samsung Galaxy S10+',
            dimensions: { width: 469, height: 869 }
        },
        {
            name: 'Samsung Galaxy S10',
            dimensions: { width: 360, height: 760 }
        },
        {
            name: 'Google Pixel 3 XL',
            dimensions: { width: 412, height: 847 }
        }
    ],
    tablets: [
        {
            name: 'iPad Pro 12.9-inch',
            dimensions: { width: 1366, height: 1024 }
        },
        {
            name: 'iPad Pro 10.5-inch',
            dimensions: { width: 1112, height: 834 }
        },
        {
            name: 'iPad Pro 9.7-inch',
            dimensions: { width: 1024, height: 768 }
        },
        {
            name: 'Samsung Galaxy Tab 10',
            dimensions: { width: 1280, height: 800 }
        }
    ],
    monitors: [
        {
            name: 'FullHD Wide',
            dimensions: { width: 1920, height: 1200 }
        },
        {
            name: 'FullHD',
            dimensions: { width: 1920, height: 1080 }
        },
        {
            name: 'HD+',
            dimensions: { width: 1600, height: 900 }
        },
        {
            name: 'HD',
            dimensions: { width: 1280, height: 720 }
        }
    ]
};
