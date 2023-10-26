'use client'

import { Portal } from "react-portal"
import { useRef } from "react"
import { useUI } from "@/context/ui.context"
import { MdClose } from 'react-icons/md'
import useClickOutside from '@/hooks/useClickOutside'

type ModalTypes = {
	open?: boolean;
	children?: React.ReactNode;
	onClose?: () => void;
}

const Modal: React.FC<ModalTypes> = ({
    children,
	open,
	onClose,
}) => {
  const modalRootRef = useRef(null)
  const modalInnerRef = useRef(null)

  const { displayModal, closeModal } = useUI();
  useClickOutside(modalInnerRef, () => closeModal());


  return (
    <Portal>
        {displayModal ? (
            <div 
                ref={modalRootRef}
                className="w-full h-screen fixed top-0 left-0 bg-[#202020be] z-[1000] flex items-center justify-center"
            >
              <div
                ref={modalInnerRef}
                className="relative w-full h-full  md:w-[600px] md:h-auto"
              >
                <div className="absolute right-[10px] top-[10px] cursor-pointer">
                    <MdClose size={25} onClick={closeModal} color='white' />
                </div>
                {children}
              </div>
          </div>
        ) : null}     
    </Portal>
  )
}

export default Modal