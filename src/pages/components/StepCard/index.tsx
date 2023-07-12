export type StepCardProps = {
  heading: string;
  desc?: string;
  index: number | string;
};

export default function StepCard({ heading, desc, index }: StepCardProps) {
  return (
    <div className='relative rounded-lg border-2 border-cardBorder px-5 py-5'>
      <span className='absolute left-[-6%] top-1/4 rounded-full bg-gray-700 px-3 py-1 text-lg text-brand-400'>
        {index}
      </span>
      <p className='text-lg tracking-tight text-white'>{heading}</p>
      <p className='text-base tracking-tight text-white'>{desc}</p>
    </div>
  );
}
