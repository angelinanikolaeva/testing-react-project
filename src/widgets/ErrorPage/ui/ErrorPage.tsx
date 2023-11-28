import cls from "./ErrorPage.module.scss";

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const reloadPage = () => {
    location.reload();
  };

  // TODO: change to custom button
  return (
    <div className={[cls.ErrorPage, className].join(" ")}>
      <p>Something went wrong...</p>
      <button onClick={reloadPage}>Reload page</button>
    </div>
  );
};
