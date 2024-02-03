import Image from 'next/image'

interface Props {
    source: string;
    name: string;
    job: string;
    layout: string
}

export default function ProfileImg({ source, name, job, layout } : Props) {
  return (
    <figure>
        <Image src={`/img/${source}`} width={150} height={70} alt="profile image" className={layout} />
        <div className="flex flex-col items-center">

            <figcaption className="font-semibold">{name}</figcaption>
            <div className="w-12 h-1 bg-black my-1"></div>
            <figcaption className="text-sm">{job}</figcaption>
        </div>
    </figure>
  )
}
