import { User, Craft, Notification } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const mockUsers: User[] = [
  {
    id: 'artisan-1',
    name: 'Elena Vance',
    email: 'elena.vance@example.com',
    avatarUrl: getImage('avatar-1'),
    role: 'artisan',
    age: 34,
    region: 'Tuscany, Italy',
    artField: 'Ceramics',
    journey: 'Started with clay as a child and never looked back. My work is inspired by the rolling hills of my home.',
  },
  {
    id: 'buyer-1',
    name: 'Alex Chen',
    email: 'alex.chen@example.com',
    avatarUrl: getImage('avatar-2'),
    role: 'buyer',
    interests: 'Minimalist design, sustainable materials, home decor',
  },
    {
    id: 'artisan-2',
    name: 'Marcus Cole',
    email: 'marcus.cole@example.com',
    avatarUrl: getImage('avatar-3'),
    role: 'artisan',
    age: 42,
    region: 'Oregon, USA',
    artField: 'Woodworking',
    journey: 'From corporate life to a fulfilling career in carpentry. I find beauty in the grain of every piece of wood.',
  },
];

export const mockCrafts: Craft[] = [
  {
    id: 'craft-1',
    artisanId: 'artisan-1',
    title: 'Terracotta Vase',
    description: 'A rustic terracotta vase, perfect for bringing a touch of nature indoors. Each piece is hand-thrown and unique.',
    imageUrl: getImage('craft-1'),
    createdAt: '2023-10-26T10:00:00Z',
  },
  {
    id: 'craft-2',
    artisanId: 'artisan-1',
    title: 'Earthenware Mug Set',
    description: 'Set of four hand-glazed earthenware mugs. Ideal for your morning coffee or evening tea.',
    imageUrl: 'https://picsum.photos/seed/craft1-2/600/400',
    createdAt: '2023-10-25T11:30:00Z',
  },
    {
    id: 'craft-3',
    artisanId: 'artisan-2',
    title: 'Oakwood Serving Bowl',
    description: 'A large, hand-carved serving bowl made from a single piece of reclaimed oak. Finished with food-safe oil.',
    imageUrl: getImage('craft-5'),
    createdAt: '2023-10-24T14:00:00Z',
  },
  {
    id: 'craft-4',
    artisanId: 'artisan-2',
    title: 'Walnut Cutting Board',
    description: 'Durable and beautiful cutting board from American walnut. Features a live edge for a natural look.',
    imageUrl: 'https://picsum.photos/seed/craft2-2/600/400',
    createdAt: '2023-10-23T18:45:00Z',
  },
   {
    id: 'craft-5',
    artisanId: 'artisan-1',
    title: 'Oceanic Glaze Plate',
    description: 'Decorative plate with a unique oceanic glaze that mimics the sea. A stunning centerpiece for any table.',
    imageUrl: getImage('craft-4'),
    createdAt: '2023-10-22T09:20:00Z',
  },
];

export const mockNotifications: Notification[] = [
    {
        id: 'notif-1',
        userId: 'artisan-1',
        title: 'New Inquiry',
        description: 'Alex Chen is interested in a custom version of your Terracotta Vase.',
        createdAt: '2023-10-27T09:00:00Z',
        read: false,
    },
    {
        id: 'notif-2',
        userId: 'artisan-1',
        title: 'Profile Liked',
        description: 'A buyer from Paris just liked your profile!',
        createdAt: '2023-10-26T15:30:00Z',
        read: true,
    },
     {
        id: 'notif-3',
        userId: 'buyer-1',
        title: 'Message from Elena Vance',
        description: 'Elena has responded to your inquiry about the custom vase.',
        createdAt: '2023-10-27T10:15:00Z',
        read: false,
    }
];

export const getArtisanForCraft = (craft: Craft) => mockUsers.find(user => user.id === craft.artisanId && user.role === 'artisan');
