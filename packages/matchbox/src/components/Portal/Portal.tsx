import ReactDOM from 'react-dom';

export type PortalProps = {
  /**
   * ID of the target portal container. Appends a new portal to document body if not provided.
   */
  containerId?: string;
  /**
   * Content rendered inside the portal
   */
  children?: React.ReactNode;
};

function Portal(props: PortalProps): React.ReactPortal | null {
  const { containerId, children } = props;

  if (typeof document !== 'undefined') {
    const container = containerId ? document.getElementById(containerId) : document.body;
    if (container) {
      return ReactDOM.createPortal(children, container);
    }
  }

  return null;
}

Portal.displayName = 'Portal';
export default Portal;
