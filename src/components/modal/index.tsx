// 'use client'

// import React from 'react'

// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   useDisclosure,
// } from '@nextui-org/react'
// import { Add as IconAdd } from 'iconsax-react'
// import { twMerge } from 'tailwind-merge'

// type DefaultModal = {
//   isOpen: boolean
//   onOpenChange: () => void
//   isDismissable?: boolean
//   propsModal?: any
//   modalTitle: any
//   styleModalTitle?: string
//   subModalTitle?: any
//   modalBody?: any
//   editFooter?: boolean
//   btnCloseContent?: 'Hủy' | string
//   btnConfirmContent?: 'Xác nhận' | string
//   onConfirm?: () => void
//   loadingBtnConfirm?: boolean
//   hiddenBtnCancel?: boolean
// }

// const DefaultModal: React.FC<DefaultModal> = ({
//   isOpen,
//   onOpenChange,
//   isDismissable,
//   propsModal,
//   modalTitle,
//   styleModalTitle,
//   subModalTitle,
//   modalBody,
//   editFooter = false,
//   btnCloseContent,
//   btnConfirmContent,
//   onConfirm,
//   loadingBtnConfirm = false,
//   hiddenBtnCancel = false,
// }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onOpenChange={onOpenChange}
//       className='z-[100] shadow-[0px_8px_16px_0px_#A2BAF366]'
//       classNames={{
//         base: 'rounded-md',
//         body: 'py-6 max-h-[80vh] px-5',
//         header: 'border-b-[1px] border-base-gray-2',
//         footer: 'border-t-[1px] border-base-gray-2',
//         closeButton: 'hover:bg-white/5 active:bg-white/10',
//       }}
//       hideCloseButton={true}
//       isDismissable={isDismissable || false}
//       scrollBehavior='inside'
//       {...propsModal}
//     >
//       <ModalContent>
//         {(onClose) => (
//           <>
//             <ModalHeader className='flex items-center justify-between gap-1'>
//               <div>
//                 <h5
//                   className={twMerge(
//                     'text-2xl font-bold text-primary-blue ',
//                     styleModalTitle,
//                   )}
//                 >
//                   {modalTitle}
//                 </h5>
//                 <span className='text-base font-[400] text-base-black-1'>
//                   {subModalTitle}
//                 </span>
//               </div>
//               <IconBtn onClick={onClose} style='hover:bg-base-gray-2 h-10'>
//                 <IconAdd className='rotate-45' />
//               </IconBtn>
//             </ModalHeader>
//             {modalBody}
//             <>
//               {editFooter ? null : (
//                 <ModalFooter className='flex gap-5'>
//                   {!hiddenBtnCancel && (
//                     <BorderedBtn onClick={onClose}>
//                       {btnCloseContent || 'Hủy'}
//                     </BorderedBtn>
//                   )}
//                   <PrimaryBtn onClick={onConfirm} isLoading={loadingBtnConfirm}>
//                     {btnConfirmContent || 'Xác nhận'}
//                   </PrimaryBtn>
//                 </ModalFooter>
//               )}
//             </>
//           </>
//         )}
//       </ModalContent>
//     </Modal>
//   )
// }

// export const ConfirmationModal: React.FC<{
//   children: any
//   title: any
//   content: any
//   onConfirm: any
//   btnCloseContent?: string
//   btnConfirmContent?: string
//   loadingBtnConfirm?: boolean
// }> = ({
//   children,
//   title,
//   content,
//   onConfirm,
//   btnCloseContent,
//   btnConfirmContent,
//   loadingBtnConfirm,
// }) => {
//   const { onOpen, isOpen, onClose, onOpenChange } = useDisclosure()

//   const _HandleConfirm = () => {
//     onConfirm()
//     onClose()
//   }

//   return (
//     <>
//       <div onClick={onOpen}>{React.cloneElement(children, { onClick: onOpen })}</div>
//       <Modal
//         isOpen={isOpen}
//         onOpenChange={onOpenChange}
//         hideCloseButton={true}
//         classNames={{
//           base: 'rounded-md',
//           body: 'py-6 max-h-[80vh] px-5',
//           header: 'border-b-[1px] border-base-gray-2',
//           footer: 'border-t-[1px] border-base-gray-2',
//           closeButton: 'hover:bg-white/5 active:bg-white/10',
//         }}
//       >
//         <ModalContent>
//           <ModalHeader className='flex items-center justify-between gap-1'>
//             <h5 className='text-2xl font-bold text-primary-blue '>{title}</h5>
//             <IconBtn onClick={onClose} style='hover:bg-base-gray-2 h-10'>
//               <IconAdd className='rotate-45' />
//             </IconBtn>
//           </ModalHeader>
//           <ModalBody>{content}</ModalBody>
//           <ModalFooter className='flex gap-5'>
//             <BorderedBtn onClick={onClose}>{btnCloseContent || 'Trở về'}</BorderedBtn>
//             <PrimaryBtn onClick={_HandleConfirm.bind(this)} isLoading={loadingBtnConfirm}>
//               {btnConfirmContent || 'Xác nhận'}
//             </PrimaryBtn>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   )
// }

// export default DefaultModal
