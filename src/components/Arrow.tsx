export const Arrow = ({
  volteado,
  handleClick,
  desabilitado
}: {
  volteado: boolean;
  handleClick: () => void;
  desabilitado: boolean;
}) => {
  const classNameDesabilitado = desabilitado ? 'desabilitado' : '';
  const classNameVolteado = volteado ? 'arrowVolteado' : 'arrowNormal';
  return (
    <svg
      onClick={handleClick}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={`${classNameDesabilitado} ${classNameVolteado}`}
    >
      <path
        fill='currentColor'
        d='M16 22 6 12 16 2l1.775 1.775L9.55 12l8.225 8.225z'
      />
    </svg>
  );
};
