
interface Props {
  field: string;
}

export const ButtonLogin: React.FC<Props> = ({ field }) => {
  return (
    <form
      className='w-full justify-center flex'
    >

      <button
        type="submit"
        className='group flex justify-center w-2/4 bg-music-primary py-4 px-10 hover:bg-music-green-light rounded-full lg:w-1/4'>
        <span className='text-spoify-white group-hover:underline group-hover:underline-offset-1'>{field}</span>
      </button>
    </form>
  );
};