package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

var (
	users     = make(map[string]User)
	products  = make(map[string]Product)
	visitors  = make(map[string]int)
)

func main() {
	r := gin.Default()

	// Serve static files
	r.Static("/", "./frontend")

	// Authentication routes
	r.POST("/register", registerHandler)
	r.POST("/login", loginHandler)

	// Product routes
	r.GET("/products", getProductsHandler)
	r.POST("/products", addProductHandler)

	// Visitor tracking route
	r.GET("/seller/stats", getVisitorStatsHandler)

	log.Println("Server starting on :8080")
	r.Run(":8080")
}