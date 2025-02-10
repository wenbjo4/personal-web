'use client';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function SchedulePage() {
  const { t } = useTranslation('schedule');
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true); // 新增 loading 狀態

  useEffect(() => {
    async function fetchSchedules() {
      try {
        const response = await fetch('/api/schedule');
        const data = await response.json();
        setSchedules(data);
      } catch (error) {
        console.error('載入行程失敗', error);
      } finally {
        setLoading(false); // 資料傳回後，設定為 false
      }
    }

    fetchSchedules();
  }, []);

  return (
    <main className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{t('pageTitle')}</h1>

      {/* 載入中時顯示 Loading */}
      {loading ? (
        <p>{t('loading')}</p>
      ) : schedules.length === 0 ? (
        <p>{t('noSchedule')}</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">{t('tableHeader.date')}</th>
              <th className="border p-2">{t('tableHeader.title')}</th>
              <th className="border p-2">{t('tableHeader.startTime')}</th>
              <th className="border p-2">{t('tableHeader.endTime')}</th>
              <th className="border p-2">{t('tableHeader.location')}</th>
            </tr>
          </thead>

          <tbody>
            {schedules.map(schedule => (
              <tr key={schedule._id}>
                <td className="border p-2">{schedule.date}</td>
                <td className="border p-2">{schedule.title}</td>
                <td className="border p-2">{schedule.startTime}</td>
                <td className="border p-2">{schedule.endTime}</td>
                <td className="border p-2">{schedule.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
