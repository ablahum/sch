import Announcements from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';
import Performance from '@/components/Performance';
import Image from 'next/image';
import Link from 'next/link';

const SingleStudentPage = () => (
  <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
    <div className='w-full xl:w-2/3'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='bg-schYellow py-6 px-4 rounded-md flex-1 flex gap-4'>
          <div className='w-1/3'>
            <Image
              src='https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200'
              alt=''
              width={144}
              height={144}
              className='w-36 h-36 rounded-full object-cover'
            />
          </div>

          <div className='w-2/3 flex flex-col justify-between gap-4'>
            <h1 className='text-xl font-semibold capitalize'>cameron moran</h1>

            <p className='text-sm text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
              <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                <Image
                  src='/blood.png'
                  alt=''
                  width={14}
                  height={14}
                />

                <span className='capitalize'>a+</span>
              </div>

              <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                <Image
                  src='/date.png'
                  alt=''
                  width={14}
                  height={14}
                />

                <span className='capitalize'>january 2025</span>
              </div>
              <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                <Image
                  src='/mail.png'
                  alt=''
                  width={14}
                  height={14}
                />

                <span>user@gmail.com</span>
              </div>

              <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                <Image
                  src='/phone.png'
                  alt=''
                  width={14}
                  height={14}
                />

                <span>+1 234 567</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex-1 flex gap-4 justify-between flex-wrap'>
          <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
            <Image
              src='/singleAttendance.png'
              alt=''
              width={24}
              height={24}
              className='w-6 h-6'
            />

            <div className=''>
              <h1 className='text-xl font-semibold'>90%</h1>

              <span className='text-sm text-gray-400 capitalize'>attendance</span>
            </div>
          </div>

          <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
            <Image
              src='/singleBranch.png'
              alt=''
              width={24}
              height={24}
              className='w-6 h-6'
            />

            <div className=''>
              <h1 className='text-xl font-semibold'>6th</h1>

              <span className='text-sm text-gray-400 capitalize'>grade</span>
            </div>
          </div>

          <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
            <Image
              src='/singleLesson.png'
              alt=''
              width={24}
              height={24}
              className='w-6 h-6'
            />

            <div className=''>
              <h1 className='text-xl font-semibold'>18</h1>

              <span className='text-sm text-gray-400 capitalize'>lessons</span>
            </div>
          </div>

          <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
            <Image
              src='/singleClass.png'
              alt=''
              width={24}
              height={24}
              className='w-6 h-6'
            />

            <div className=''>
              <h1 className='text-xl font-semibold capitalize'>6a</h1>

              <span className='text-sm text-gray-400 capitalize'>class</span>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
        <h1 className='capitalize'>student&apos;s schedule</h1>

        <BigCalendar />
      </div>
    </div>

    <div className='w-full xl:w-1/3 flex flex-col gap-4'>
      <div className='bg-white p-4 rounded-md'>
        <h1 className='text-xl font-semibold capitalize'>shortcuts</h1>

        <div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-500'>
          <Link
            className='p-3 rounded-md bg-schSkyLight capitalize'
            href='/'
          >
            student&apos;s lessons
          </Link>

          <Link
            className='p-3 rounded-md bg-schPurpleLight capitalize'
            href='/'
          >
            student&apos;s teachers
          </Link>

          <Link
            className='p-3 rounded-md bg-pink-50 capitalize'
            href='/'
          >
            student&apos;s exams
          </Link>

          <Link
            className='p-3 rounded-md bg-schSkyLight capitalize'
            href='/'
          >
            student&apos;s assignments
          </Link>

          <Link
            className='p-3 rounded-md bg-schYellowLight capitalize'
            href='/'
          >
            student&apos;s results
          </Link>
        </div>
      </div>

      <Performance />

      <Announcements />
    </div>
  </div>
);

export default SingleStudentPage;
