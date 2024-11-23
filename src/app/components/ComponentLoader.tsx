interface ComponentLoaderProps {
  children: React.ReactNode;
  isLoading: boolean;
  LoaderComponent: React.ReactNode;
}
const ComponentLoader: React.FC<ComponentLoaderProps> = ({
  children,
  isLoading,
  LoaderComponent,
}) => {
  if (isLoading) {
    return LoaderComponent;
  }

  return children;
};

export default ComponentLoader;
