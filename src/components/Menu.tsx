import { role } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const menuItems = [
  {
    title: 'menu',
    items: [
      {
        icon: '/home.png',
        label: 'home',
        href: '/',
        visibleTo: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/teacher.png',
        label: 'teachers',
        href: '/list/teachers',
        visibleTo: ['admin', 'teacher'],
      },
      {
        icon: '/student.png',
        label: 'students',
        href: '/list/students',
        visibleTo: ['admin', 'teacher'],
      },
      {
        icon: '/parent.png',
        label: 'parents',
        href: '/list/parents',
        visibleTo: ['admin', 'teacher'],
      },
      {
        icon: '/subject.png',
        label: 'subjects',
        href: '/list/subjects',
        visibleTo: ['admin'],
      },
      {
        icon: '/class.png',
        label: 'classes',
        href: '/list/classes',
        visibleTo: ['admin', 'teacher'],
      },
      {
        icon: '/lesson.png',
        label: 'lessons',
        href: '/list/lessons',
        visibleTo: ['admin', 'teacher'],
      },
      {
        icon: '/exam.png',
        label: 'exams',
        href: '/list/exams',
        visibleTo: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/assignment.png',
        label: 'assignments',
        href: '/list/assignments',
        visibleTo: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/result.png',
        label: 'results',
        href: '/list/results',
        visibleTo: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/attendance.png',
        label: 'attendance',
        href: '/list/attendance',
        visibleTo: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/calendar.png',
        label: 'events',
        href: '/list/events',
        visibleTo: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/message.png',
        label: 'messages',
        href: '/list/messages',
        visibleTo: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/announcement.png',
        label: 'announcements',
        href: '/list/announcements',
        visibleTo: ['admin', 'teacher', 'student', 'parent'],
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
        visibleTo: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/setting.png',
        label: 'settings',
        href: '/settings',
        visibleTo: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/logout.png',
        label: 'logout',
        href: '/logout',
        visibleTo: ['admin', 'teacher', 'student', 'parent'],
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
        {menu.items.map((item) => {
          if (item.visibleTo.includes(role)) {
            return (
              <Link
                href={item.href}
                key={item.label}
                className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-schSkyLight'
              >
                <Image
                  src={item.icon}
                  alt=''
                  width={20}
                  height={20}
                />

                <span className='hidden lg:block capitalize'>{item.label}</span>
              </Link>
            );
          }
        })}
      </div>
    ))}
  </div>
);

export default Menu;
