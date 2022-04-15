import { useEffect } from "react";

/**
 *
 * @param onUnmountHandler 卸载回调
 */
export default function useComponentWillUnmount(
  onUnmountHandler: () => void
): void {
  useEffect(() => {
    return () => {
      onUnmountHandler();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
