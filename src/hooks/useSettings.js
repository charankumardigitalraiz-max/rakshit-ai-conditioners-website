import { useState, useEffect } from 'react';
import { fetchJSON } from '../services/api';

let cachedSettings = null;
let fetchPromise = null;

export const useSettings = () => {
  const [settings, setSettings] = useState(cachedSettings || {});
  const [loading, setLoading] = useState(!cachedSettings);

  useEffect(() => {
    if (cachedSettings) {
      setSettings(cachedSettings);
      setLoading(false);
      return;
    }

    if (!fetchPromise) {
      fetchPromise = fetchJSON('/settings').then(res => {
        if (res.success) {
          cachedSettings = res.data;
          return res.data;
        }
        return {};
      }).catch(() => {
        return {};
      });
    }

    fetchPromise.then(data => {
      setSettings(data);
      setLoading(false);
    });
  }, []);

  return { settings, loading };
};
