import { SVGProps, forwardRef } from 'react';

const SequoiaIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
    (props: SVGProps<SVGSVGElement>, ref) => (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3845_1798)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.10571 2.94531H2.89062V24.9216L6.10571 21.7066V2.94531ZM8.02083 23.731H8.89142H26.8906V26.9453H4.80655L8.02083 23.731ZM26.8906 17.8375V20.9453H10.8065L13.9144 17.8375H26.8906ZM11.9993 15.813L8.89142 18.9208V2.94531H11.9993V15.813ZM16.7001 15.0518H26.8906V11.9452H19.8067L16.7001 15.0518ZM20.6772 9.15949V2.94531H26.8906V9.15949H20.6772ZM17.8915 9.92073L14.785 13.0273V2.94531H17.8915V9.92073Z" fill="#2e7d32"/>
                </g>
                <defs>
                    <clipPath id="clip0_3845_1798">
                        <rect width="24" height="24" fill="white" transform="translate(2.89062 2.94531)"/>
                    </clipPath>
                </defs>
            </svg>
    ),
);

SequoiaIcon.displayName = 'SequoiaIcon';

export default SequoiaIcon;
