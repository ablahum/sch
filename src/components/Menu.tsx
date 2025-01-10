import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
  {
    title: 'menu',
    items: [
      {
        icon: '/home.png',
        label: 'home',
        href: '/',
      },
      {
        icon: '/teacher.png',
        label: 'teachers',
        href: '/teachers',
      },
      {
        icon: '/student.png',
        label: 'students',
        href: '/students',
      },
      {
        icon: '/parent.png',
        label: 'parents',
        href: '/parents',
      },
      {
        icon: '/class.png',
        label: 'classes',
        href: '/classes',
      },
      {
        icon: '/lesson.png',
        label: 'lessons',
        href: '/lessons',
      },
      {
        icon: '/exam.png',
        label: 'exams',
        href: '/exams',
      },
      {
        icon: '/assignment.png',
        label: 'assignments',
        href: '/assignments',
      },
      {
        icon: '/attendance.png',
        label: 'attendances',
        href: '/attendances',
      },
      {
        icon: '/calendar.png',
        label: 'events',
        href: '/events',
      },
      {
        icon: '/message.png',
        label: 'messages',
        href: '/messages',
      },
      {
        icon: '/announcement.png',
        label: 'announcements',
        href: '/announcements',
      },
    ],
  },
  {
    title: 'other',
    items: [
      {
        icon: '/profile.png',
        label: 'profile',
        href: '/profile',
      },
      {
        icon: '/setting.png',
        label: 'settings',
        href: '/settings',
      },
      {
        icon: '/logout.png',
        label: 'logout',
        href: '/logout',
      },
    ],
  },
];

const Menu = () => (
  <div className='mt-4 text-sm'>
    {menuItems.map((menu) => (
      <div
        className='flex flex-col gap-2'
        key={menu.title}
      >
        <span className='hidden lg:block text-gray-400 font-light my-4 uppercase'>{menu.title}</span>

        {menu.items.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2'
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={20}
              height={20}
            />

            <span className='hidden lg:block capitalize'>{item.label}</span>
          </Link>
        ))}
      </div>
    ))}
  </div>
);

export default Menu;
