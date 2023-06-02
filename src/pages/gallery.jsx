export default function GalleryPage() {
  return (
    <>
      <h1 className='text-center font-semibold text-5xl my-5'>Photo Gallery</h1>
      <section className='p-4 flex gap-4 flex-wrap'>
        <img
          src='https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/345597004_198248599723526_1339349115797603373_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=szuenNHRCpoAX_XA7OR&_nc_ht=scontent.fktm10-1.fna&oh=00_AfDDDJ7YWWw-vf8Sxu0bUtpmrlqxNGft4FMegRg85My30g&oe=647CCBA0'
          width={700}
        />
        <img
          src='https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/344366137_154002290738117_4767660648284448860_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=6ACI6kZW7q4AX-3uT7N&_nc_ht=scontent.fktm10-1.fna&oh=00_AfAfD9qf89Xs8yZLDh8qLx9Pdwj3w8NVTM0QPMXbxK08cw&oe=647CE311'
          width={700}
        />
        <img
          src='https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/338157206_1659643394478024_7035839447553798079_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jp3l67WmoKsAX8HtTX4&_nc_ht=scontent.fktm10-1.fna&oh=00_AfC3qlq9JQTL2h3paawn2FlqwyH6ybVGEXFA_nOpUTGupw&oe=647CFC1C'
          width={700}
        />
      </section>
    </>
  );
}
