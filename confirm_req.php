<?php
    include('./widgets/session.php');
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $reqId = $_POST['request_id'];
        $stmt = $conn->prepare("UPDATE vehicle_requested SET status = 'confirmed' WHERE request_id = ?");
        $stmt->bind_param("i", $reqId);
        $stmt->execute();
        $stmt->close();
        $conn->close();
    }
?>