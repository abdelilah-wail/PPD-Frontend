import { Play, Ticket, Tag } from 'lucide-react';

interface NotificationItemProps {
    icon: React.ReactNode;
    bgColor: string;
    title: string;
    time: string;
    description: string;
    isRead?: boolean;
}

const NotificationItem = ({ icon, bgColor, title, time, description, isRead = false }: NotificationItemProps) => (
    <div className={`flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer ${!isRead ? 'opacity-100' : 'opacity-50'}`}>
        <div className={`flex-shrink-0 w-12 h-12 rounded-full overflow-hidden flex items-center justify-center ${bgColor}`}>
            {icon}
        </div>
        <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-semibold text-gray-500">{title}</h4>
                <span className="text-xs text-gray-400">{time}</span>
            </div>
            <p className="text-sm font-bold text-slate-800 truncate">{description}</p>
        </div>
    </div>
);

const NotificationsDropdown = () => {
    const notifications = [
        {
            id: 1,
            title: 'Course upload',
            time: '30min ago',
            description: 'Md. Arsh uploaded a new course.',
            bgColor: 'bg-indigo-100',
            icon: <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" alt="" className="w-full h-full object-cover" />,
            isRead: false
        },
        {
            id: 2,
            title: 'Resume Course',
            time: '30min ago',
            description: 'Resume your course today.',
            bgColor: 'bg-orange-100',
            icon: <Play className="text-orange-500 fill-orange-500" size={20} />,
            isRead: false
        },
        {
            id: 3,
            title: 'Coupon',
            time: '30min ago',
            description: 'Redeem your new coupon today.',
            bgColor: 'bg-yellow-100',
            icon: <Ticket className="text-yellow-500 fill-yellow-500" size={20} />,
            isRead: false
        },
        {
            id: 4,
            title: 'Discount',
            time: '30min ago',
            description: 'Get 20% discount on new courses.',
            bgColor: 'bg-red-500',
            icon: <Tag className="text-white fill-white" size={20} />,
            isRead: false
        },
        {
            id: 5,
            title: 'Course upload',
            time: '30min ago',
            description: 'Md. Arsh uploaded a new course.',
            bgColor: 'bg-indigo-100',
            icon: <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" alt="" className="w-full h-full object-cover" />,
            isRead: true
        },
        {
            id: 6,
            title: 'Resume Course',
            time: '30min ago',
            description: 'Resume your course today.',
            bgColor: 'bg-orange-100',
            icon: <Play className="text-orange-300 fill-orange-300" size={20} />,
            isRead: true
        }
    ];

    return (
        <div className="absolute right-0 mt-4 w-[380px] bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-in fade-in zoom-in duration-200 origin-top-right">
            <div className="p-5 border-b border-gray-50">
                <h3 className="text-xl font-bold text-slate-800">Notifications</h3>
            </div>
            <div className="max-h-[480px] overflow-y-auto custom-scrollbar">
                {notifications.map((notif, index) => (
                    <div key={notif.id}>
                        <NotificationItem {...notif} />
                        {index < notifications.length - 1 && (
                            <div className="mx-4 border-b border-gray-50" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationsDropdown;
