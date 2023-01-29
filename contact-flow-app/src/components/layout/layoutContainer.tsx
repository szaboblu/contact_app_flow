interface LayoutContainerProps {
  children: React.ReactNode;
}

export const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-lexend bg-G-100 text-white">
      {children}
    </div>
  );
};
