'use client'

import Modal from "./Modal";
import { useUI } from "@/context/ui.context";

import WorkModal from "./WorkModal";

const ManagedModal = () => {
	const { displayModal, closeModal } = useUI();

	return (
		<Modal open={displayModal} onClose={closeModal}>
			<WorkModal />
		</Modal>
	);
};

export default ManagedModal;