import { twMerge } from "tailwind-merge";

interface BrandProps {
  className?: string;
  type: "logo" | "logo_text";
}

const Brand = ({ className, type }: BrandProps) => {
  switch (type) {
    case "logo":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 70 69.996"
          className={twMerge("", className)}>
          <g xmlns="http://www.w3.org/2000/svg">
            <path d="M48.082 27.667 36.484 18.22a2.35 2.35 0 0 0-2.993 0l-11.598 9.472a.957.957 0 0 0 0 1.484l3.635 2.968c.52.42 1.261.42 1.806 0l7.641-6.232 7.642 6.256c.52.42 1.261.42 1.805 0l3.636-2.967c.494-.42.494-1.138.024-1.534z" />
            <path d="m59.706 37.189 9.942-8.087a.957.957 0 0 0 0-1.484L36.484.538a2.35 2.35 0 0 0-2.993 0L.352 27.568a.957.957 0 0 0 0 1.484l9.942 8.112-9.942 8.112a.957.957 0 0 0 0 1.483L28.57 69.784a.94.94 0 0 0 1.533-.742v-23.42c0-.717-.321-1.41-.89-1.855l-8.062-6.578-5.44-4.427-4.7-3.883c-.346-.272-.346-.816 0-1.113L34.11 8.922a1.45 1.45 0 0 1 1.805 0l23.098 18.844c.347.272.347.816 0 1.113l-4.723 3.858-5.466 4.452-8.062 6.578a2.356 2.356 0 0 0-.89 1.855v23.42c0 .791.94 1.236 1.533.742l28.218-23.025a.957.957 0 0 0 0-1.483l-9.917-8.087zM16.18 41.986l6.603 5.392c.322.272.544.692.544 1.113v7.122c0 .396-.47.643-.766.37l-11.55-9.421c-.346-.272-.346-.817 0-1.113l4.279-3.487c.247-.223.618-.223.89.024zm30.518 13.627v-7.122c0-.42.197-.841.544-1.113l6.603-5.392c.247-.222.618-.222.89 0l4.278 3.487c.347.272.347.817 0 1.113L47.464 56.01c-.321.222-.766.024-.766-.396z" />
          </g>
        </svg>
      );
    case "logo_text":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 370 69.99578867107236"
          className={twMerge("", className)}>
          <g xmlns="http://www.w3.org/2000/svg">
            <path d="M48.082 27.667 36.484 18.22a2.35 2.35 0 0 0-2.993 0l-11.598 9.472a.957.957 0 0 0 0 1.484l3.635 2.968c.52.42 1.261.42 1.806 0l7.641-6.232 7.642 6.256c.52.42 1.261.42 1.805 0l3.636-2.967c.494-.42.494-1.138.024-1.534z" />
            <path d="m59.706 37.189 9.942-8.087a.957.957 0 0 0 0-1.484L36.484.538a2.35 2.35 0 0 0-2.993 0L.352 27.568a.957.957 0 0 0 0 1.484l9.942 8.112-9.942 8.112a.957.957 0 0 0 0 1.483L28.57 69.784a.94.94 0 0 0 1.533-.742v-23.42c0-.717-.321-1.41-.89-1.855l-8.062-6.578-5.44-4.427-4.7-3.883c-.346-.272-.346-.816 0-1.113L34.11 8.922a1.45 1.45 0 0 1 1.805 0l23.098 18.844c.347.272.347.816 0 1.113l-4.723 3.858-5.466 4.452-8.062 6.578a2.356 2.356 0 0 0-.89 1.855v23.42c0 .791.94 1.236 1.533.742l28.218-23.025a.957.957 0 0 0 0-1.483l-9.917-8.087zM16.18 41.986l6.603 5.392c.322.272.544.692.544 1.113v7.122c0 .396-.47.643-.766.37l-11.55-9.421c-.346-.272-.346-.817 0-1.113l4.279-3.487c.247-.223.618-.223.89.024zm30.518 13.627v-7.122c0-.42.197-.841.544-1.113l6.603-5.392c.247-.222.618-.222.89 0l4.278 3.487c.347.272.347.817 0 1.113L47.464 56.01c-.321.222-.766.024-.766-.396z" />
          </g>
          <path d="M109.792 23.257h7.613v31.059h-7.613l-12.18-18.169v18.169H90V23.257h7.612l12.18 18.168V23.257zm20.956 15.326c.761.254 1.624.457 2.537.559a15.63 15.63 0 0 0 2.588.203c1.015 0 3.604-.203 3.604-1.675 0-1.573-2.233-1.624-3.35-1.624-2.233 0-4.161.507-5.38 2.537zM145.11 46.4v7.105c-2.842.66-5.684 1.116-8.628 1.116-8.069 0-14.057-4.72-14.057-12.89 0-8.07 5.785-13.043 13.448-13.043 5.228 0 11.267 2.487 11.267 8.425 0 5.887-6.395 8.069-11.317 8.069-1.878 0-3.756-.508-5.481-1.218 1.015 2.842 4.06 3.299 6.699 3.299 1.37 0 2.74-.051 4.11-.254 1.27-.102 2.74-.254 3.959-.61zm14.409-4.77c0 3.755 1.878 5.886 5.684 5.886 1.065 0 2.03-.152 2.791-.507 1.42-.558 2.385-1.624 2.893-3.096.203-.71.304-1.472.304-2.284s-.101-1.573-.304-2.283c-.559-1.574-1.421-2.436-2.893-3.147-.761-.304-1.726-.457-2.791-.457-3.806 0-5.684 2.132-5.684 5.887zm-7.613-22.838h7.613V31.48c1.725-1.98 4.06-2.792 6.648-2.792 7.41 0 12.637 5.938 12.637 13.043 0 8.018-5.938 12.84-13.5 12.84-7.866 0-13.398-5.177-13.398-12.942V18.791zm49.325 10.15h7.612v12.687c0 7.765-5.38 12.941-12.94 12.941-7.765 0-12.942-5.43-12.942-12.94V28.94h7.613v12.687c0 3.4 1.725 5.887 5.328 5.887 3.705 0 5.329-2.436 5.329-5.887V28.941zm13.445-10.15h7.612v35.525h-7.612V18.79zm31.765 22.837c-.203-3.704-1.878-5.887-5.735-5.887-1.066 0-1.979.153-2.74.457-2.335 1.066-3.197 3.045-3.197 5.481 0 .812.101 1.573.355 2.233.761 2.639 3.045 3.603 5.582 3.603 3.857 0 5.735-2.08 5.735-5.887zm9.642 12.688h-7.612c-.508-1.27-.964-2.538-1.269-3.857-1.725 2.842-4.364 4.11-7.612 4.11-7.257 0-12.434-6.09-12.434-13.042 0-8.019 5.989-12.84 13.55-12.84 8.07 0 13.144 5.177 13.347 12.941.051.66.051 1.421.051 2.335 0 3.552.558 7.105 1.98 10.353zm17.91-24.512v7.054h-6.241v17.458h-7.613V28.992c0-8.425 6.192-12.992 14.007-12.992.254 0 .61 0 .964.05s.762.153 1.117.204v7.358c-.254-.05-.558-.101-.914-.152s-.66-.101-.913-.101c-1.269 0-2.284.152-3.147.406-1.42.507-2.69 1.471-3.146 2.994-.254.66-.355 1.42-.355 2.182v.863h6.242zm16.947 17.711c3.705 0 5.836-2.182 5.836-5.887s-2.131-5.887-5.836-5.887-5.836 2.183-5.836 5.887 2.132 5.887 5.836 5.887zm0 7.054c-7.815 0-13.448-5.176-13.448-12.94 0-8.019 5.836-12.942 13.448-12.942 7.866 0 13.449 5.177 13.449 12.941 0 7.968-5.887 12.941-13.449 12.941zm25.676-12.94v12.687h-7.613V41.679c0-8.424 6.192-12.992 14.007-12.992.254 0 .609 0 .964.051s.761.152 1.117.203V36.3c-.254-.051-.559-.102-.914-.153s-.66-.101-.913-.101c-1.269 0-2.284.152-3.147.406-1.42.507-2.69 1.472-3.146 2.994-.254.66-.355 1.421-.355 2.182zM370 40.612v13.703h-7.612V40.613c0-2.892-1.37-4.872-4.416-4.872-2.994 0-4.466 2.03-4.466 4.872v13.703h-7.612V40.613c0-2.892-1.472-4.872-4.517-4.872-2.994 0-4.364 2.03-4.364 4.872v13.703h-7.612V40.613c0-7.358 5.024-11.926 12.078-11.926 3.603 0 6.394 1.675 8.221 4.77 1.827-3.095 4.618-4.77 8.222-4.77 7.308 0 12.078 4.821 12.078 11.926z" />
        </svg>
      );
  }
};

export default Brand;