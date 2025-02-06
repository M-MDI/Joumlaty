package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"your-project/models"
)

var users = make(map[string]models.User)

func RegisterHandler(c *gin.Context) {
	var req models.LoginRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	if _, exists := users[req.Username]; exists {
		c.JSON(http.StatusConflict, gin.H{"error": "Username already exists"})
		return
	}

	user := models.User{
		Username: req.Username,
		Password: req.Password,
		Role:     req.Role,
	}
	users[req.Username] = user

	c.JSON(http.StatusCreated, gin.H{"message": "User registered successfully"})
}

func LoginHandler(c *gin.Context) {
	var req models.LoginRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	user, exists := users[req.Username]
	if !exists || user.Password != req.Password || user.Role != req.Role {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Login successful"})
}