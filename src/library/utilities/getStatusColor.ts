export default function getStatusColor (status: string) {
    switch(status) {
        case 'Sample requested': 
            return { backgroundColor: '#EA4640' }
        case 'Sample Kit Shipped':
            return { backgroundColor: '#FF9A40' }
        case 'sample Received':
            return { backgroundColor: '#0075FF' }
        case 'Processing':
            return { backgroundColor: '#9352DA' }
        case 'Completed':
            return { backgroundColor: '#29D98E' }
        default:
            return { backgroundColor: '#EA4640' }
    }
}
