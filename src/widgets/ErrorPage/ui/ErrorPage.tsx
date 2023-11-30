import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ErrorPage.module.scss";
import { BaseButton } from "@/shared/ui/BaseButton";

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <p>Something went wrong...</p>
      <BaseButton onClick={reloadPage}>Reload page</BaseButton>
    </div>
  );
};
